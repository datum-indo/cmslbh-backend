import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseWhereInput } from "../../../inputs/RenamedcaseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseWhereInput, {
    nullable: true
  })
  where?: RenamedcaseWhereInput | undefined;
}
