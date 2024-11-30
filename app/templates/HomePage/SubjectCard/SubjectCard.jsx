
import Wrapper from "@/app/shared/Wrapper";
import { FaComputer, FaBook } from "react-icons/fa6";

const subjectList = [
  {
    id: 1,
    name: "Computer",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0.2
  },
  {
    id: 2,
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3
  },
  {
    id: 3,
    name: "Reasoning",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4
  },
  {
    id: 4,
    name: "Science",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5
  },
  {
    id: 5,
    name: "History",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6
  },
  {
    id: 6,
    name: "Maths",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7
  },
  {
    id: 7,
    name: "General Studies",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9
  }
];

const SubjectCard = () => {
  return (
    <div className="p-4">
      <Wrapper>
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">
            Find Online Tutor in Any Subject
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {subjectList.map((subject) => {
            return (
              <div
                key={subject.id}
                className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20"
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  {subject.icon}
                </div>
                <p>{subject.name}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default SubjectCard;
