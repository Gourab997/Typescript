type NoobDeveloper = {
  name: string;
};

// type Developer = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type Developer = NoobDeveloper & {
  expertise: string;
  experience: number;
  level : Level
};

enum Level {
    Noob = "Noob",
    Intermediate = "Intermediate",
    Expert = "Expert",
    };

const newDeveloper: Developer | NoobDeveloper = {
  name: "Alice",
  expertise: "Frontend",
  experience: 2,
  level : Level.Noob

};
