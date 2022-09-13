import { HeaderLink } from "..";

import * as S from "./styles";

interface HeaderProps {
  links: HeaderLink[];
}

export function HeaderComponent({ links }: HeaderProps) {
  return (
    <S.Header>
      {links.map((link) => {
        return (
          <a href={link.href} className="link">
            <i
              dangerouslySetInnerHTML={{
                __html: link.icon,
              }}
            ></i>

            {link.title}
          </a>
        );
      })}
    </S.Header>
  );
}
