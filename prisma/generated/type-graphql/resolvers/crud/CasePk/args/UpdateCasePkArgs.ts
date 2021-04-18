import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkUpdateInput } from "../../../inputs/CasePkUpdateInput";
import { CasePkWhereUniqueInput } from "../../../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkUpdateInput, {
    nullable: false
  })
  data!: CasePkUpdateInput;

  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;
}
