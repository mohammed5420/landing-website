import React from "react";
import Question from "./Question";
const Faq = () => {
  const faq = [
    {
      id: 1,
      q: `how to cuntact with riders emergency ?`,
      a: ` devices transforms theconsectetur adipisicing elit. Sapiente
        in eveniet voluptatibus. Temporibus earum dicta sapiente minima,
        dolore quos atque molestiae quam molestias  most elevant channels such as Facebook.`,
    },
    {
      id: 2,
      q: `how to cuntact with riders emergency ?`,
      a: ` devices transforms theconsectetur adipisicing elit. Sapiente
          in eveniet voluptatibus. Temporibus earum dicta sapiente minima,
          dolore quos atque molestiae quam molestias  most elevant channels such as Facebook.`,
    },
    {
      id: 3,
      q: `how to cuntact with riders emergency ?`,
      a: ` devices transforms theconsectetur adipisicing elit. Sapiente
          in eveniet voluptatibus. Temporibus earum dicta sapiente minima,
          dolore quos atque molestiae quam molestias  most elevant channels such as Facebook.`,
    },
  ];
  const faqMap = faq.map(el => {
    return <Question data={el} key={el.id} />;
  });
  return (
    <section className="faq" id="FAQ">
      <div className="faq__title">
        <h2 className="title-header">Frequntly asked questions</h2>
        <p className="title-body">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="faq__qa">{faqMap}</div>
    </section>
  );
};

export default Faq;
