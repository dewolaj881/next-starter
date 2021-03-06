import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import tw from "twin.macro";
import Icon from "@svg/icon-arrow-left.svg";
import Table from "@components/atoms/table/table";
import Thead from "@components/atoms/table/thead/thead";
import Th from "@components/atoms/table/th/th";
import Tr from "@components/atoms/table/tr/tr";
import Tbody from "@components/atoms/table/tbody/tbody";
import Td from "@components/atoms/table/td/td";
import Ul from "@components/atoms/lists/ul/ul";
import Li from "@components/atoms/lists/li/li";
import TextHr from "@components/text-hr";
import Img from "@components/atoms/img/img";
import MainContainer from "layouts/main-container";

import Nav from "@components/nav/nav";
import A from "@components/atoms/a/a";
import NextLink from "@components/atoms/next-link/next-link";
import Showcase from "@components/docs/showcase";

type HomeProps = Record<string, unknown>;

const Home: NextPage<HomeProps> = () => {
  // console.log(props);
  return (
    <main>
      <Nav />
      <MainContainer>
        <h1
          css={css`
            ${tw`text-6xl`}
          `}
        >
          This is the heading
        </h1>

        <Showcase code="Hello" />

        <NextLink href="/all-mdx-components">All Mdx components</NextLink>
        <A
          css={css`
            ${tw`block`}
          `}
          href="https://google.com"
        >
          Link
        </A>
        <Icon
          css={css`
            ${tw`w-8 h-8`}
          `}
        />
        <Img
          css={css`
            ${tw`w-32 h-32`}
          `}
          alt="CDC 3d generated bacteria"
          src="../imgs/bacteria.jpg"
        />

        <Ul>
          <Li>Hello world</Li>
          <Li>MDX List Element</Li>
          <Li>I&apos;m another LI element</Li>
          <Li>Last List Element</Li>
        </Ul>

        <TextHr />

        <Table>
          <Thead
            css={css`
              ${tw`border-t border-b border-gray-400`}
            `}
          >
            <Tr>
              <Th>Tailwind Class</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                css={css`
                  ${tw`p-2 font-mono text-xs font-semibold text-indigo-700`}
                `}
              >
                text-xs
              </Td>
              <Td
                css={css`
                  ${tw`p-2 font-mono text-xs text-purple-600`}
                `}
              >
                font-size: .75rem;
              </Td>
            </Tr>
            <Tr>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                text-xs
              </td>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                font-size: .75rem;
              </td>
            </Tr>
            <Tr>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                text-xs
              </td>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                font-size: .75rem;
              </td>
            </Tr>
          </Tbody>
        </Table>
      </MainContainer>
    </main>
  );
};

export default Home;

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
