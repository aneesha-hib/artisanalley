const Breadcrumbs = ({ title, linksArray }) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <ol>
            {linksArray?.map((link, index) => {
              return (
                <li key={index}>
                  {link?.url ? <a href={link?.url}>{link?.name}</a> : link?.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumbs
