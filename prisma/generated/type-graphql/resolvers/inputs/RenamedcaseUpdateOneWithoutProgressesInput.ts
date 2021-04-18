import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutProgressesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutProgressesInput";
import { RenamedcaseCreateWithoutProgressesInput } from "../inputs/RenamedcaseCreateWithoutProgressesInput";
import { RenamedcaseUpdateWithoutProgressesInput } from "../inputs/RenamedcaseUpdateWithoutProgressesInput";
import { RenamedcaseUpsertWithoutProgressesInput } from "../inputs/RenamedcaseUpsertWithoutProgressesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutProgressesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutProgressesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutProgressesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutProgressesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutProgressesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutProgressesInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutProgressesInput | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutProgressesInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutProgressesInput | undefined;
}
