import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAllRoles } from "@/utils/getAllRoles";
import { getAllUsers } from "@/utils/getAllUsers";
import Head from "next/head";

export default async function Home() {
  const loginUser = async (formData: FormData) => {
    "use server";

    const username = formData.get("username");
    const password = formData.get("password");


    console.log({ username, password });
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      
      <div className="flex min-h-screen bg-gray-700 justify-center items-center">
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <form method="POST" action={loginUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  className="input input-bordered" 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  className="input input-bordered" 
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
