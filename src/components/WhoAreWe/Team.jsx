import { motion } from 'framer-motion';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';

const Team = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      position: "Position",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/Adithya%20VS.png"
    },
    {
      name: "Team Member 2",
      position: "Position",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/Parivarthan%20Reddy.png"
    },
    {
      name: "Team Member 3",
      position: "Position",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/Pragadeeswar.png"
    },
    {
      name: "Team Member 4",
      position: "Position",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/Kalyan.png"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-[64px] w-full max-w-[1441px] px-[80px]">
      {/* Title */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center gap-[10px] w-full max-w-[1281px]">
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title text-center text-[#131112] w-full">
            Our Team
          </h2>
        </div>
      </FadeIn>
      
      {/* Team Cards Grid */}
      <StaggeredList 
        className="flex flex-wrap justify-center items-center gap-[20px] w-full max-w-[1281px]"
        delay={0.4}
        staggerDelay={0.1}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-end items-start p-[16px_12px] gap-[2px] w-[240.2px] h-[300px] rounded-[24px] relative overflow-hidden flex-grow-0 flex-shrink-0 basis-auto bg-gray-800"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {/* Background Image */}
            <img 
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-[2px] w-full">
              <h3 className="font-outfit font-bold text-card text-white w-full">
                {member.name}
              </h3>
              <p className="font-outfit font-medium text-card-mobile text-white w-full">
                {member.position}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggeredList>
    </div>
  );
};

export default Team;
