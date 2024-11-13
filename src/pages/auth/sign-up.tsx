import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
})

type signUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>()

  const { mutateAsync: registerBusinessFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  const navigate = useNavigate()

  async function handleSignUp(data: signUpForm) {
    console.log(data)

    registerBusinessFn({
      email: data.email,
      managerName: data.managerName,
      phone: data.phone,
      restaurantName: data.restaurantName,
    })

    toast.success('Business registered successfully', {
      action: {
        label: 'Login',
        onClick: () => navigate(`/sign-in?email=${data.email}`),
      },
    })
  }

  return (
    <main>
      <Helmet title="Sign Up" />
      <main className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-in" className="">
            Login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Become a member and start selling!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Business name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Your phone number</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Sign Up
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              While registering, you agree with our{' '}
              <a className="underline underline-offset-4">Terms of Service</a>{' '}
              and <a className="underline underline-offset-4">privacy policy</a>
            </p>
          </form>
        </div>
      </main>
    </main>
  )
}
