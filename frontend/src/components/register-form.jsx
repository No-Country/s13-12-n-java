"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
        // username: data.username,
        email: data.email,
        password: data.password,
      });
      router.push("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  });

  return (
    <form onSubmit={onSubmit} className="w-1/4">
      {error && <p className="bg-red-500 text-white p-3 rounded mb-2">{error}</p>}

      {/* <Label htmlFor="username" className="text-slate-500 pt-5 block">
          Usuario:
        </Label>
        <Input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "El usuario es obligatorio",
            },
          })}
          placeholder="yourUser123"
        />
        {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>} */}

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
        placeholder="********"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <Label htmlFor="confirmPassword" className="text-slate-500 pt-5 block">
        Confirmar contraseña:
      </Label>
      <Input
        type="password"
        {...register("confirmPassword", {
          required: {
            value: true,
            message: "Confirmar la contraseña es obligatoria",
          },
          validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
        })}
        placeholder="********"
      />
      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

      <Button className="w-full text-white p-5 rounded-lg mt-2">Registrarse</Button>
    </form>
  );
}
