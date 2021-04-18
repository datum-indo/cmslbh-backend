import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateOrderByInput } from "../../../inputs/SrcTemplateOrderByInput";
import { SrcTemplateWhereInput } from "../../../inputs/SrcTemplateWhereInput";
import { SrcTemplateWhereUniqueInput } from "../../../inputs/SrcTemplateWhereUniqueInput";
import { SrcTemplateScalarFieldEnum } from "../../../../enums/SrcTemplateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateWhereInput, {
    nullable: true
  })
  where?: SrcTemplateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SrcTemplateOrderByInput], {
    nullable: true
  })
  orderBy?: SrcTemplateOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SrcTemplateWhereUniqueInput, {
    nullable: true
  })
  cursor?: SrcTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SrcTemplateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "template"> | undefined;
}
