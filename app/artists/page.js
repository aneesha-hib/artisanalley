import dynamic from "next/dynamic";
import { breadCrumps } from "../lib/breadCrumps";
import Breadcrumbs from "../ui/BreadCrumps";
// import ArtistCard from "../ui/artists/ArtistCard";
const ArtistCard = dynamic(() => import('../ui/artists/ArtistCard'), { ssr: false })
const Artists = () => {
  return (
    <main id="main">
      <Breadcrumbs {...breadCrumps.ARTISTS} />
      <section
        className="team"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <div className="container">
          <div className="row">
            <ArtistCard
              id={1}
              image={"assets/img/team/team-1.jpg"}
              name={"Walter White"}
              designation={"Chief Executive Officer"}
              description={`Animi est delectus alias quam repellendus nihil nobis dolor.
            Est sapiente occaecati et dolore. Omnis aut ut nesciunt
            explicabo qui. Eius nam deleniti ut omnis repudiandae
            perferendis qui. Neque non quidem sit sed pariatur quia modi
            ea occaecati. Incidunt ea non est corporis in.`}
            />
            <ArtistCard
              id={2}
              image={"assets/img/team/team-2.jpg"}
              name={"Sarah Jhonson"}
              designation={"Product Manager"}
              description={`Aspernatur iste esse aliquam enim et corporis. Molestiae
            voluptatem aut eligendi quis aut. Libero vel amet voluptatem
            eos rerum non doloremque. Dolores eum non.`}
            />

            <ArtistCard
              id={3}
              image={"assets/img/team/team-3.jpg"}
              name={"William Anderson"}
              designation={"CTO"}
              description={` Ut enim possimus nihil cupiditate beatae. Veniam facere quae
             non qui necessitatibus rerum eos vero. Maxime sit sunt quo
             dolor autem est qui quaerat aliquid. Tenetur possimus qui
             enim.`}
            />

            <ArtistCard
              id={4}
              image={"assets/img/team/team-4.jpg"}
              name={"Amanda Jepson"}
              designation={"Accountant"}
              description={` Sint qui cupiditate. Asperiores fugit impedit aspernatur et
          mollitia. Molestiae qui placeat labore assumenda id qui
          nesciunt quo reprehenderit. Rem dolores similique quis
          soluta culpa enim quia ratione ea.`}
            />
            <ArtistCard
              id={5}
              image={"assets/img/team/team-5.jpg"}
              name={"Niall Katz"}
              description={` Aut ex esse explicabo quia harum ea accusamus excepturi.
          Temporibus at quia quisquam veritatis impedit. Porro laborum
          voluptatum sed necessitatibus a saepe. Deserunt laborum
          quasi consequatur voluptatum iusto sint qui fuga vel. Enim
          eveniet sed quibusdam rerum in. Non dicta architecto
          consequatur quo praesentium nesciunt.`}
              designation={"Graphic Designer"}
            />

            <ArtistCard
              id={6}
              image={"assets/img/team/team-6.jpg"}
              name={"Demi Lewis"}
              description={`Amet labore numquam corrupti est. Nostrum amet voluptas
            consectetur dolor voluptatem architecto distinctio
            consequuntur eligendi. Quam impedit enim aut nesciunt aut
            dicta quam exercitationem. Reprehenderit exercitationem
            magnam. Ullam similique ut voluptas totam nobis porro
            accusamus nulla omnis.`}
              designation={"Financing"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Artists;
