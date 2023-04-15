import ProfBlock from "./components/ProfBlock.tsx";
import { randomItem } from "./helpers/randomItem.ts";

const professions = [
  {
    rotated: [
      {
        id: "asd6a45sd5as635d",
        prof: "PHP-разработчик",
        image: "https://api.cloveri.com/media/profession/logo/PHP.png",
      },
      {
        id: "qwe79wq8e5263df4s6d",
        prof: "Android-разработчик",
        image: "https://api.cloveri.com/media/profession/logo/android.png",
      },
      {
        id: "asd6a45sd5as635dasdasd",
        prof: "Frontend-разработчик",
        image: "https://api.cloveri.com/media/img/PRO007.jpg",
      },
      {
        id: "qwe79wq8e5263df4s6dqwqe",
        prof: "Linux-администратор",
        image: "https://api.cloveri.com/media/img/PRO006.jpg",
      },
      {
        id: "qweweasd6a45sd5as635d",
        prof: "Инженер инфраструктуры, DevOps",
        image: "https://api.cloveri.com/media/profession/logo/DevOps.png",
      },
      {
        id: "qwe79wq8e5263df4s6dagagag",
        prof: "Anykey-специалист",
        image:
          "https://api.cloveri.com/media/survey_templates/logo/Mladshyi_sisadmin.jpg",
      },
      {
        id: "agagagagasd6a45sd5as635d",
        prof: "Web-разработчик",
        image: "	https://api.cloveri.com/media/img/PRO001.jpg",
      },
      {
        id: "qwe79wq8e526azxc3df4s6d",
        prof: "IT-директор",
        image: "https://api.cloveri.com/media/img/PRO002.jpg",
      },
      {
        id: "asd6a45sd5as635dxddxd",
        prof: "Product-менеджер",
        image:
          "	https://api.cloveri.com/media/survey_templates/logo/Product_manager.jpg",
      },
      {
        id: "qwe79zxcvbbbwq8e5263df4s6d",
        prof: "Backend-разработчик",
        image: "https://api.cloveri.com/media/survey_templates/logo/PRO010.jpg",
      },
    ],
  },
  {
    static: [
      {
        id: "98gj5hgj65nmb4n698",
        prof: "Еще 20+ профессий",
        image:
          "https://static.tildacdn.com/tild3863-3465-4663-b634-333764646231/main-profession.png",
      },
      {
        id: "9vb5n4rthr1ty32ty1r3ty",
        prof: "Больше возможностей",
        image:
          "https://static.tildacdn.com/tild3164-6466-4963-a234-326130313230/develop.png",
      },
    ],
  },
];

function App() {
  const randomArr = randomItem(professions[0].rotated);

  return (
    <section className="App">
      <div className="wrapper">
        <div className="prof">
          {/* HEADER */}
          <h2 className="prof__header">
            Выберите профессию, узнай свой уровевнь и получи рекомендации:
          </h2>

          <div className="prof__blocksWrapper">
            {/* ROTATION PART */}
            <div className="prof__rotation">
              {randomArr &&
                randomArr.map((prof) => {
                  return (
                    <ProfBlock
                      key={prof.id}
                      picture={prof.image}
                      prof={prof.prof}
                    />
                  );
                })}
            </div>

            {/* STATIC PART */}
            <div className="prof__static">
              {professions &&
                professions.map((prof) => {
                  return prof.static?.map((item) => {
                    return (
                      <ProfBlock
                        key={item.id}
                        picture={item.image}
                        prof={item.prof}
                      />
                    );
                  });
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
