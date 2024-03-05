"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-72 w-1/4">
      {error && <p className="bg-red-500 text-white p-3 rounded mb-2">{error}</p>}

      <Label htmlFor="email" className="text-slate-500 pt-5 block">
        Correo:
      </Label>
      <Input
        type="email"
        {...register("email", {
          required: {
            value: true,
            message: "El correo electrónico es obligatorio",
          },
        })}
        placeholder="user@email.com"
      />

      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

      <Label htmlFor="password" className="text-slate-500 pt-5 block">
        Contraseña:
      </Label>
      <Input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es obligatoria",
          },
        })}
        placeholder="******"
      />

      {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

      <Button className="w-full text-white p-5 rounded-lg mt-2">Iniciar sesión</Button>
    </form>
  );
}
