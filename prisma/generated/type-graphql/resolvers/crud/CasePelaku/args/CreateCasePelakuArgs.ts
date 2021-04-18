import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuCreateInput } from "../../../inputs/CasePelakuCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuCreateInput, {
    nullable: false
  })
  data!: CasePelakuCreateInput;
}
