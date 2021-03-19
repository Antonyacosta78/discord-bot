import CommandContext from "./CommandContext";

export default interface CommandNamespace {
  name: string;
  guard: (context: CommandContext) => boolean
};
