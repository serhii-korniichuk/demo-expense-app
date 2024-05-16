import { TokenPair } from '../interfaces/User.interface';

export default interface PageProps {
  authorized: boolean;
  setTokens: (tokens: TokenPair | null) => void;
}
