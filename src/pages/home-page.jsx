import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Введите корректный email"),
  role: z.string().min(2, "Введите роль")
});

const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      role: ""
    }
  });

  const onSubmit = (values) => {
    console.log("Form values", values);
  };

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Hirex UI Starter</p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Стартовая структура для интерфейса из Figma
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          Подключены React Router, TanStack Query, React Hook Form и Zod. Используйте этот экран, чтобы
          развернуть дизайн из макета и подключить данные.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-medium text-slate-300">Email кандидата</label>
              <input
                {...register("email")}
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                placeholder="name@company.com"
                type="email"
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-rose-300">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">Роль</label>
              <input
                {...register("role")}
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                placeholder="Product designer"
                type="text"
              />
              {errors.role ? (
                <p className="mt-2 text-xs text-rose-300">{errors.role.message}</p>
              ) : null}
            </div>
            <button
              className="w-full rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400"
              type="submit"
            >
              Создать карточку кандидата
            </button>
          </form>
        </div>
        <aside className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-lg font-semibold text-white">Быстрые подсказки</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
              Компоненты складывайте в <span className="text-white">src/components</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
              Страницы держите в <span className="text-white">src/pages</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
              Запросы через <span className="text-white">TanStack Query</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
              Валидацию форм через <span className="text-white">Zod</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default HomePage;
