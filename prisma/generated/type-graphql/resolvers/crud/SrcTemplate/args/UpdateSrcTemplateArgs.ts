import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateUpdateInput } from "../../../inputs/SrcTemplateUpdateInput";
import { SrcTemplateWhereUniqueInput } from "../../../inputs/SrcTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateUpdateInput, {
    nullable: false
  })
  data!: SrcTemplateUpdateInput;

  @TypeGraphQL.Field(_type => SrcTemplateWhereUniqueInput, {
    nullable: false
  })
  where!: SrcTemplateWhereUniqueInput;
}
