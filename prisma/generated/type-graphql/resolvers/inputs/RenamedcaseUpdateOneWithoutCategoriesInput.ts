import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutCategoriesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutCategoriesInput";
import { RenamedcaseCreateWithoutCategoriesInput } from "../inputs/RenamedcaseCreateWithoutCategoriesInput";
import { RenamedcaseUpdateWithoutCategoriesInput } from "../inputs/RenamedcaseUpdateWithoutCategoriesInput";
import { RenamedcaseUpsertWithoutCategoriesInput } from "../inputs/RenamedcaseUpsertWithoutCategoriesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutCategoriesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutCategoriesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutCategoriesInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutCategoriesInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutCategoriesInput | undefined;
}
