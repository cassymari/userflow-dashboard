import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  overflow-x: hidden;

  background:
    radial-gradient(
      circle at top left,
      rgba(236, 72, 153, 0.12),
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
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1px;

  span {
    color: #ec4899;
  }
`

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
  width: min(760px, calc(100% - 40px));
  margin: 0 auto;
  padding: 70px 0 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  @media (max-width: 500px) {
    width: calc(100% - 24px);
    padding: 45px 0 35px;
    gap: 26px;
  }
`

export const Header = styled.header`
  max-width: 720px;
  text-align: center;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 18px;
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
  font-size: clamp(38px, 6vw, 58px);
  line-height: 1.08;
  letter-spacing: -2.4px;

  @media (max-width: 500px) {
    font-size: 36px;
    letter-spacing: -1.5px;
  }
`

export const Description = styled.p`
  max-width: 640px;
  margin: 20px auto 0;

  color: #94a3b8;
  font-size: 16px;
  line-height: 1.7;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

export const Stats = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const StatCard = styled.article`
  min-height: 92px;
  padding: 18px;

  display: flex;
  align-items: center;
  gap: 13px;

  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 16px;

  background: rgba(15, 23, 42, 0.7);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
`

export const StatIcon = styled.div`
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  border-radius: 12px;
  background: rgba(236, 72, 153, 0.1);

  font-size: 20px;
`

export const StatInformation = styled.div`
  min-width: 0;
`

export const StatValue = styled.strong`
  display: block;

  color: #f8fafc;
  font-size: 14px;
  font-weight: 700;
`

export const StatLabel = styled.span`
  display: block;
  margin-top: 4px;

  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
`

export const Form = styled.form`
  box-sizing: border-box;
  width: 100%;
  max-width: 620px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 19px;

  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 22px;

  background: rgba(15, 23, 42, 0.88);

  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(14px);

  @media (max-width: 500px) {
    padding: 23px 17px;
    border-radius: 18px;
  }
`

export const FormHeader = styled.div`
  margin-bottom: 3px;
`

export const FormTitle = styled.h2`
  margin: 0;

  color: #f8fafc;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.7px;
`

export const FormDescription = styled.p`
  margin: 7px 0 0;

  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
`

export const ContainerInputs = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px;
  gap: 13px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const InputGroup = styled.div`
  min-width: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const InputLabel = styled.label`
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 600;

  span {
    color: #f472b6;
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 0 15px;

  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 11px;
  outline: none;

  background: rgba(2, 6, 23, 0.58);
  color: #f8fafc;

  font-family: inherit;
  font-size: 13px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:hover {
    border-color: rgba(236, 72, 153, 0.45);
  }

  &:focus {
    border-color: #ec4899;
    background: rgba(2, 6, 23, 0.82);
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
  }
`

export const RequiredText = styled.p`
  margin: -7px 0 0;

  color: #64748b;
  font-size: 11px;

  span {
    color: #f472b6;
  }
`

export const Message = styled.div`
  padding: 11px 13px;

  border: 1px solid
    ${({ type }) =>
      type === 'success'
        ? 'rgba(34, 197, 94, 0.3)'
        : 'rgba(239, 68, 68, 0.3)'};

  border-radius: 10px;

  background: ${({ type }) =>
    type === 'success'
      ? 'rgba(34, 197, 94, 0.08)'
      : 'rgba(239, 68, 68, 0.08)'};

  color: ${({ type }) =>
    type === 'success' ? '#86efac' : '#fca5a5'};

  font-size: 12px;
  font-weight: 500;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 100%;
    min-height: 47px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
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