import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuWhereInput } from "../../../inputs/CasePelakuWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  where?: CasePelakuWhereInput | undefined;
}
