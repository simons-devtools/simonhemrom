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
      justify-content: space-between;
      align-items: center;
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
          background-image: linear-gradient(
            rgb(0, 0, 0, 0.5),
            rgb(0, 0, 0, 0.5)
          );
          border-radius: var(--border-radius);
        }
        a,
        .image {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: var(--border-radius);
          filter: blur(2px);
        }
        &:hover {
          a,
          .image {
            filter: blur(0px);
            transition: var(--transition);
          }
          &::after {
            display: none;
            transition: var(--transition);
          }
        }
      }

      .feature-content {
        position: relative;
        width: 435px;
        height: 320px;
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
            background: var(--light-navy);
            border-radius: var(--border-radius);
          }
        }
        .theme-technologies {
          display: flex;
          li {
            color: inherit !important;
          }
        }
        .theme-source {
          display: flex;
          li {
            width: 22px;
            height: 22px;
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
            (
              { id, role, name, links, image, article, website, technologies },
              index
            ) => (
              <div
                key={index}
                className="features-wrapper"
                style={{
                  margin: `${index === 1 ? "100px 0px" : "0px"}`,
                  flexDirection: `${index === 1 ? "row-reverse" : "row"}`,
                }}
              >
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
                <div
                  className="feature-content"
                  style={{ textAlign: `${index === 1 ? "left" : "right"}` }}
                >
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
                    <p
                      className="featured-three"
                      style={{
                        margin: `${
                          index === 1
                            ? "0px -60px 0px 0px"
                            : "0px 0px 0px -60px"
                        }`,
                      }}
                    >
                      {article}
                    </p>
                  </div>
                  <ul
                    className="theme-technologies"
                    style={{ justifyContent: `${index !== 1 && "flex-end"}` }}
                  >
                    {technologies &&
                      technologies.map(({ id, tech }) => (
                        <li
                          key={id}
                          style={{
                            margin: `${
                              index === 1
                                ? "15px 20px 15px 0px"
                                : "15px 0px 15px 20px"
                            }`,
                          }}
                        >
                          {tech}
                        </li>
                      ))}
                  </ul>
                  <ul
                    className="theme-source"
                    style={{ justifyContent: `${index !== 1 && "flex-end"}` }}
                  >
                    {links &&
                      links.map(({ id, route, icon }) => (
                        <li
                          key={id}
                          style={{
                            margin: `${
                              index === 1
                                ? "0px 34px 0px 0px"
                                : "0px 0px 0px 34px"
                            }`,
                          }}
                        >
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
