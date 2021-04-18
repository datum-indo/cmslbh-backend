import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkWhereInput } from "../../../inputs/CasePkWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkWhereInput, {
    nullable: true
  })
  where?: CasePkWhereInput | undefined;
}
