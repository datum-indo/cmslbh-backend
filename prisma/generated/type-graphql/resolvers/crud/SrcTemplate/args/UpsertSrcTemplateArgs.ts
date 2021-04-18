import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateCreateInput } from "../../../inputs/SrcTemplateCreateInput";
import { SrcTemplateUpdateInput } from "../../../inputs/SrcTemplateUpdateInput";
import { SrcTemplateWhereUniqueInput } from "../../../inputs/SrcTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateWhereUniqueInput, {
    nullable: false
  })
  where!: SrcTemplateWhereUniqueInput;

  @TypeGraphQL.Field(_type => SrcTemplateCreateInput, {
    nullable: false
  })
  create!: SrcTemplateCreateInput;

  @TypeGraphQL.Field(_type => SrcTemplateUpdateInput, {
    nullable: false
  })
  update!: SrcTemplateUpdateInput;
}
