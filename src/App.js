import "./styles.css";
import { React, useState } from "react";

const genreList = ["Drama", "Action", "Adventure"];
const animeList = {
  Drama: [
    {
      title: "FullMetal Alchmeist: BrotherHood",
      img: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      rating: 4.4,
      about: `After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.

      The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.
      
      As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.`
    },
    {
      title: "Death Note",
      img: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      rating: 4.4,
      about: `Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.

      For his own amusement, Ryuk drops his "Death Note" into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.
      
      Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias "Kira"—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.`
    },
    {
      title: "Jujutsu Kaisen",
      img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
      rating: 4.4,
      about: `Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."

      Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.`
    }
  ],

  Action: [
    {
      title: "Attack on Titans",
      img: "https://cdn.myanimelist.net/images/anime/5/44560.jpg",
      rating: 4.4,
      about: `Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.

      After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.`
    },
    {
      title: "One Punch Man",
      img: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
      rating: 4.4,
      about: `The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.

      One day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama’s disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.`
    },
    {
      title: "Demon Slayer",
      img: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
      rating: 4.4,
      about: `Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.

      When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.`
    },
    {
      title: "Dragon Ball Z",
      img: "https://cdn.myanimelist.net/images/anime/1607/117271.jpg",
      rating: 4.4,
      about: `Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.

      With his failed attempt at forcibly recruiting Gokuu as an ally, Raditz warns Gokuu's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z.`
    }
  ],
  Adventure: [
    {
      title: "One Piece",
      img:
        "https://cdn.myanimelist.net/images/anime/6/73245l.jpg?_gl=1*u4a8q0*_ga*NTk3Nzg1NjI4LjE2NjI3OTYyNDU.*_ga_26FEP9527K*MTY2Mjc5NjI0Ni4xLjEuMTY2Mjc5NjI2OC4zOC4wLjA.",
      rating: 4.5,
      about: `Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.

      Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.`
    },
    {
      title: "Hunter X Hunter",
      img:
        "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg?_gl=1*mj55mn*_ga*NTk3Nzg1NjI4LjE2NjI3OTYyNDU.*_ga_26FEP9527K*MTY2Mjc5NjI0Ni4xLjEuMTY2Mjc5Nzc3NS40Mi4wLjA.",
      rating: 4.4,
      about: `Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.

      Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.
      
      During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.`
    },
    {
      title: "Naruto: Shippuuden",
      img:
        "https://cdn.myanimelist.net/images/anime/11/63249l.jpg?_gl=1*1vfrf5z*_ga*NTk3Nzg1NjI4LjE2NjI3OTYyNDU.*_ga_26FEP9527K*MTY2Mjc5NjI0Ni4xLjEuMTY2Mjc5NzY3My40Mi4wLjA.",
      rating: 4.0,
      about: `It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.

      Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.`
    }
  ]
};

function App() {
  const [genre, setGenre] = useState("Drama");
  const [animeArray, setAnimeArray] = useState(animeList[genre]);
  const [readMore, SetReadMore] = useState({});
  const clickHandler = (inputGenre) => {
    setGenre(inputGenre);
    setAnimeArray(animeList[inputGenre]);
  };

  return (
    <main className="App">
      <h2>AnimeRater</h2>
      <ul className="review">
        {genreList.map((singleGenre) => {
          return (
            <li
              key={singleGenre}
              onClick={() => {
                clickHandler(singleGenre);
              }}
              className={singleGenre === genre ? "active" : null}
            >
              {singleGenre}
            </li>
          );
        })}
      </ul>
      {animeArray.map((anime) => {
        return (
          <div className="item review" key={anime.title}>
            <h4>{anime.title}</h4>
            <div className="img-container">
              <img src={anime.img} alt={`${anime.title} img`} className="img" />
            </div>
            <p className="rate">{anime.rating}</p>
            <p>
              {readMore[anime.title]
                ? anime?.about
                : anime?.about?.substring(0, 300)}{" "}
              <span
                onClick={() => {
                  SetReadMore({
                    ...readMore,
                    [anime.title]: !(readMore[anime.title] ? true : false)
                  });
                }}
              >
                {readMore[anime.title] ? "...show Less" : "...show More"}
              </span>
            </p>
          </div>
        );
      })}
    </main>
  );
}
export default App;
