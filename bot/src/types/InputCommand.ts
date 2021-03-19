export default interface InputCommand {
  namespace: string | null;
  command: string;
  args: string[]
};
