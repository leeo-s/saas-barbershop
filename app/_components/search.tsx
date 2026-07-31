"use client"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

/* estamos utilizando o React Hook Form com o shadcn para que, ao invés de usar um useState que faria um re-render
toda vez que uma tecla fosse apertada ao digitar a busca, usamos o useForm para que o valor seja obtido somente
no momento em que o form fosse submetido, ganhando desempenho ao não fazer o re-render, fora a validação dos campos
com o zod que está sendo feita para garantir a veracidade das informações 
*/

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Digite algo para buscar",
  }),
})

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const router = useRouter()

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershops?title=${data.title}`)
  }

  return (
    <Form {...form}>
      <form
        action=""
        className="flex gap-2"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Faça sua busca..."
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="rounded-lg bg-purple-600" type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  )
}

export default Search
