import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkCreateInput } from "../../../inputs/CasePkCreateInput";
import { CasePkUpdateInput } from "../../../inputs/CasePkUpdateInput";
import { CasePkWhereUniqueInput } from "../../../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePkCreateInput, {
    nullable: false
  })
  create!: CasePkCreateInput;

  @TypeGraphQL.Field(_type => CasePkUpdateInput, {
    nullable: false
  })
  update!: CasePkUpdateInput;
}
