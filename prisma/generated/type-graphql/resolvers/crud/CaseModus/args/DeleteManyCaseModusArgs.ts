import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusWhereInput } from "../../../inputs/CaseModusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseModusArgs {
  @TypeGraphQL.Field(_type => CaseModusWhereInput, {
    nullable: true
  })
  where?: CaseModusWhereInput | undefined;
}
