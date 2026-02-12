import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  transition: transform 260ms ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

/* ================= RGB LASER PILL ================= */

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  transition: transform 240ms ease, color 240ms ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: ${({ theme }) => theme.text_primary};
  }

  /* RGB border animation */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 12px;

    background: linear-gradient(
      120deg,
      #ff0000,
      #ff9900,
      #ffee00,
      #33ff00,
      #00ffee,
      #0066ff,
      #aa00ff,
      #ff0066,
      #ff0000
    );

    background-size: 300% 300%;
    animation: rgbBorder 6s linear infinite;

    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: 0.8;
    z-index: -1;
  }

  /* inner background */
  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 11px;
    background: ${({ theme }) => theme.card};
    z-index: -1;
  }

  @keyframes rgbBorder {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 300% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;

  transition: transform 240ms ease, filter 240ms ease;

  ${SkillItem}:hover & {
    transform: scale(1.12) rotate(3deg);
    filter: drop-shadow(0px 0px 8px rgba(133, 76, 230, 0.5));
  }
`;

/* ================= COMPONENT ================= */

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past
          few years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, idx) => (
            <Skill key={`${skill.title}-${idx}`}>
              <SkillTitle>{skill.title}</SkillTitle>

              <SkillList>
                {skill.skills.map((item, i) => (
                  <SkillItem key={`${item.name}-${i}`}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
