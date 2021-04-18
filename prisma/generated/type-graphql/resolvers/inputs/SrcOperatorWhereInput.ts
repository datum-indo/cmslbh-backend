import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SrcOperatorWhereInput {
  @TypeGraphQL.Field(_type => [SrcOperatorWhereInput], {
    nullable: true
  })
  AND?: SrcOperatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SrcOperatorWhereInput], {
    nullable: true
  })
  OR?: SrcOperatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SrcOperatorWhereInput], {
    nullable: true
  })
  NOT?: SrcOperatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  operator?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;
}
