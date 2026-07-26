import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  overflow-x: hidden;

  background:
    radial-gradient(
      circle at top left,
      rgba(236, 72, 153, 0.1),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(124, 58, 237, 0.12),
      transparent 30%
    ),
    #070b18;

  color: #ffffff;
`

export const Navbar = styled.nav`
  width: min(1120px, calc(100% - 40px));
  height: 76px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid rgba(148, 163, 184, 0.12);

  @media (max-width: 500px) {
    width: calc(100% - 24px);
    height: 68px;
  }
`

export const Logo = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1px;

  span {
    color: #ec4899;
  }
`

export const NavButton = styled.button`
  padding: 10px 16px;

  border: 1px solid rgba(236, 72, 153, 0.35);
  border-radius: 10px;

  background: rgba(236, 72, 153, 0.08);
  color: #f9a8d4;

  font-family: inherit;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: rgba(236, 72, 153, 0.16);
    border-color: #ec4899;
    transform: translateY(-1px);
  }
`

export const Content = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 500px) {
    width: calc(100% - 24px);
    padding: 40px 0;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;

  margin-bottom: 30px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const HeaderText = styled.div`
  max-width: 620px;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 16px;
  padding: 8px 14px;

  border: 1px solid rgba(236, 72, 153, 0.35);
  border-radius: 999px;

  background: rgba(236, 72, 153, 0.08);
  color: #f9a8d4;

  font-size: 12px;
  font-weight: 600;

  &::before {
    content: '';
    width: 7px;
    height: 7px;

    border-radius: 50%;
    background: #ec4899;
    box-shadow: 0 0 12px #ec4899;
  }
`

export const Title = styled.h1`
  margin: 0;

  color: #f8fafc;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.08;
  letter-spacing: -2px;

  @media (max-width: 500px) {
    font-size: 34px;
  }
`

export const Description = styled.p`
  margin: 16px 0 0;

  color: #94a3b8;
  font-size: 15px;
  line-height: 1.7;
`

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(130px, 1fr));
  gap: 12px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const SummaryCard = styled.div`
  min-width: 150px;
  padding: 18px;

  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 16px;

  background: rgba(15, 23, 42, 0.72);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  @media (max-width: 500px) {
    min-width: 0;
    padding: 14px;
  }
`

export const SummaryValue = styled.strong`
  display: block;

  color: #f8fafc;
  font-size: 28px;
  line-height: 1;
`

export const SummaryLabel = styled.span`
  display: block;
  margin-top: 7px;

  color: #64748b;
  font-size: 11px;
`

export const SearchArea = styled.div`
  margin-bottom: 24px;
`

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 17px;

  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 13px;
  outline: none;

  background: rgba(15, 23, 42, 0.76);
  color: #f8fafc;

  font-family: inherit;
  font-size: 14px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: #ec4899;
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
  }
`

export const ContainerUsers = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const CardUsers = styled.article`
  min-width: 0;
  padding: 20px;

  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;

  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 18px;

  background: rgba(15, 23, 42, 0.76);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.17),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(236, 72, 153, 0.3);
    box-shadow:
      0 20px 45px rgba(0, 0, 0, 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 500px) {
    grid-template-columns: 52px minmax(0, 1fr);
    padding: 16px;
  }
`

export const AvatarUser = styled.img`
  width: 64px;
  height: 64px;

  border: 1px solid rgba(236, 72, 153, 0.24);
  border-radius: 16px;

  background: rgba(236, 72, 153, 0.08);

  @media (max-width: 500px) {
    width: 52px;
    height: 52px;
  }
`

export const UserInfo = styled.div`
  min-width: 0;
`

export const UserName = styled.h3`
  margin: 0;

  overflow: hidden;
  color: #f8fafc;

  font-size: 18px;
  font-weight: 700;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
`

export const UserEmail = styled.p`
  margin: 6px 0 0;

  overflow: hidden;
  color: #94a3b8;

  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const UserAge = styled.span`
  display: inline-flex;
  margin-top: 9px;
  padding: 5px 9px;

  border-radius: 999px;

  background: rgba(124, 58, 237, 0.11);
  color: #c4b5fd;

  font-size: 11px;
  font-weight: 600;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    grid-column: 1 / -1;
  }
`

export const DeleteButton = styled.button`
  padding: 9px 12px;

  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 10px;

  background: rgba(239, 68, 68, 0.07);
  color: #fca5a5;

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover:not(:disabled) {
    border-color: rgba(239, 68, 68, 0.55);
    background: rgba(239, 68, 68, 0.13);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const EmptyState = styled.div`
  padding: 60px 25px;

  border: 1px dashed rgba(148, 163, 184, 0.2);
  border-radius: 20px;

  background: rgba(15, 23, 42, 0.48);
  text-align: center;

  h2 {
    margin: 0;

    color: #f8fafc;
    font-size: 22px;
  }

  p {
    margin: 10px 0 22px;

    color: #94a3b8;
    font-size: 14px;
  }

  button {
    padding: 11px 16px;

    border: 1px solid rgba(236, 72, 153, 0.35);
    border-radius: 10px;

    background: rgba(236, 72, 153, 0.1);
    color: #f9a8d4;

    font-family: inherit;
    font-weight: 600;

    cursor: pointer;
  }
`

export const LoadingText = styled.p`
  padding: 45px 0;

  color: #94a3b8;
  text-align: center;
  font-size: 14px;
`

export const Footer = styled.footer`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 24px 0 30px;

  border-top: 1px solid rgba(148, 163, 184, 0.1);

  color: #64748b;
  text-align: center;
  font-size: 12px;

  strong {
    color: #cbd5e1;
  }

  @media (max-width: 500px) {
    width: calc(100% - 24px);
  }
`