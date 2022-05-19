import Image from "next/image";
import { features } from "../configs";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledFeatures = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 100px 0px;
  .features-container {
    .features-wrapper {
      display: flex;
      /* flex-direction: ${(props) => (props.id === 2 ? "row-reverse" : "row")}; */
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      /* margin: ${(props) => props.id === 2 && "100px 0px"}; */
      .feature-image {
        position: relative;
        width: 565px;
        height: 320px;
        &::after {
          display: block;
          position: absolute;
          top: 0px;
          content: "";
          width: 100%;
          height: 100%;
          background: var(--green-tint);
          border-radius: var(--border-radius);
        }
        a {
          display: block;
          .image {
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius);
          }
        }
      }

      .feature-content {
        position: relative;
        width: 435px;
        height: 320px;
        /* text-align: ${(props) => (props.id === 2 ? "left" : "right")}; */
        .theme-detail {
          .featured-one {
            color: var(--green);
          }
          .featured-two {
            margin-bottom: 15px;
            font-size: var(--fz-xxl);
            color: var(--light-slate);
            transition: var(--transition);
            &:hover {
              cursor: pointer;
              color: var(--green);
            }
          }
          .featured-three {
            padding: 25px 25px;
            margin-top: 0px;
            margin-bottom: 0px;
            /*  margin-left: ${(props) => (props.id !== 2 ? "-60px" : "0px")}; */
            /* margin-right: ${(props) => (props.id === 2 ? "-60px" : "0px")}; */
            background: var(--light-navy);
            border-radius: var(--border-radius);
          }
        }
        .theme-technologies {
          margin: 15px 0px;
          display: flex;
          flex-direction: row;
          /* justify-content: ${(props) =>
            props.id === 2 ? "flex-start" : "flex-end"}; */
          li {
            color: inherit !important;
            margin-left: 30px;
            /* padding: ${(props) =>
              props.id === 2 ? "20px 20px 20px 0px" : "20px 0px 20px 20px"}; */
          }
        }
        .theme-source {
          display: flex;
          /* justify-content: ${(props) =>
            props.id === 2 ? "flex-start" : "flex-end"}; */
          li {
            width: 22px;
            height: 22px;
            margin-left: 30px;
            /* margin: ${(props) =>
              props.id === 2 ? "0px 30px 0px 0px" : "0px 0px 0px 30px"}; */
            &:hover {
              cursor: pointer;
              color: var(--green);
              transition: var(--transition);
            }
          }
        }
      }
    }
  }
`;

export default function Features() {
  console.log("data", features);

  return (
    <StyledFeatures id="projects-section">
      <h2 className="numbered-heading">Featured Projects</h2>
      <div className="features-container">
        {features &&
          features.map(
            ({
              id,
              role,
              name,
              links,
              image,
              article,
              website,
              technologies,
            }) => (
              <div className="features-wrapper" key={id}>
                <div className="feature-image">
                  <a href={website} target="_blank" rel="noopenner noreferrer">
                    <Image
                      src={image}
                      width={565}
                      height={320}
                      quality={100}
                      alt="feature-image"
                      priority
                      className="image"
                    />
                  </a>
                </div>
                <div className="feature-content">
                  <div className="theme-detail">
                    <p className="featured-one">{role}</p>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopenner noreferrer"
                      className="featured-two"
                    >
                      {name}
                    </a>
                    <p className="featured-three">{article}</p>
                  </div>
                  <ul className="theme-technologies">
                    {technologies &&
                      technologies.map(({ id, tech }) => (
                        <li key={id}>{tech}</li>
                      ))}
                  </ul>
                  <ul className="theme-source">
                    {links &&
                      links.map(({ id, route, icon }) => (
                        <li key={id}>
                          <a
                            href={route}
                            target="_blank"
                            rel="noopenner noreferrer"
                          >
                            <Icon name={icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )
          )}
      </div>
    </StyledFeatures>
  );
}
