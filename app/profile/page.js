import dynamic from "next/dynamic";
import { breadCrumps } from "../lib/breadCrumps";
import Breadcrumbs from "../ui/BreadCrumps";
const CustomInput = dynamic(() => import('../ui/profile/CustomInput'), { ssr: false })
const CustomTextArea=dynamic(()=>import('../ui/profile/CustomTextArea'),{ssr:false})
const Profile = () => {
  return (
    <main id="main">
      <Breadcrumbs {...breadCrumps.PROFILE} />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <form className="row">
            <div className="w-full entries ">
              <article className="entry entry-single w-full lg:w-2/3">
               
                  <CustomInput label={"Name"} type={"text"} />
                  <CustomInput label={"Email"} type={"email"} />
                  <CustomTextArea label={"Description"} />
                  <CustomInput label={"Image"} type={"file"} />
                  <CustomInput label={"Facebook link"} type={"text"} />
                  <CustomInput label={"Instagram link"} type={"text"} />
                  <CustomInput label={"Twitter link"} type={"text"} />
                  <CustomInput label={"Linkedin link"} type={"text"} />
                  <button
                    type="submit"
                    className="text-sm bg-cyan-500 text-white px-4 py-2 mt-10"
                  >
                    Update
                  </button>
               
              </article>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
export default Profile;
