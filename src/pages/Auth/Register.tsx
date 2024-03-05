import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Register() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <Input
                            label="Username"
                            name="username"
                            type="text"

                            className="p-4" />
                        <Input
                            label="Email"
                            name="email"
                            type="email"

                            className="p-4" />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            className="p-4"
                        />
                        <Input
                            label="Confirm Password"
                            name="confirm-password"
                            type="password"
                            className="p-4"
                        />
                        <Button text="Register" type="submit" />
                    </form>
                    <div className="text-center mt-5">
                        <a href="#" className="text-center font-semibold text-indigo-500 hover:text-indigo-500">
                        Sign in to your account!
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
