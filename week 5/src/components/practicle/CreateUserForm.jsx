import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/practicle/components/ui/button";
import { Input } from "@/components/practicle/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/practicle/components/ui/form";
import { createUser } from "@/components/practicle/api/userApi";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
});

export default function CreateUserForm() {
  const [status, setStatus] = useState({ type: null, message: "" });

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = async (data) => {
    setStatus({ type: null, message: "" });
    try {
      const res = await createUser(data);
      setStatus({
        type: "success",
        message: `User created successfully (id: ${res.data.id})`,
      });
      form.reset();
    } catch (err) {
      setStatus({ type: "error", message: "Failed to create user. Try again." });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-sm mt-10">
      <h2 className="text-xl font-semibold mb-4">Create User</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="0300-1234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Create User"}
          </Button>
        </form>
      </Form>

      {status.type === "success" && (
        <p className="mt-4 text-sm text-green-600">{status.message}</p>
      )}
      {status.type === "error" && (
        <p className="mt-4 text-sm text-red-600">{status.message}</p>
      )}
    </div>
  );
}