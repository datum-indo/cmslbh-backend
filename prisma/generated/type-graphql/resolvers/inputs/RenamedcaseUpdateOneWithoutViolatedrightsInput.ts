import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutViolatedrightsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutViolatedrightsInput";
import { RenamedcaseCreateWithoutViolatedrightsInput } from "../inputs/RenamedcaseCreateWithoutViolatedrightsInput";
import { RenamedcaseUpdateWithoutViolatedrightsInput } from "../inputs/RenamedcaseUpdateWithoutViolatedrightsInput";
import { RenamedcaseUpsertWithoutViolatedrightsInput } from "../inputs/RenamedcaseUpsertWithoutViolatedrightsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutViolatedrightsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutViolatedrightsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutViolatedrightsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutViolatedrightsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutViolatedrightsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutViolatedrightsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutViolatedrightsInput | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutViolatedrightsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutViolatedrightsInput | undefined;
}
