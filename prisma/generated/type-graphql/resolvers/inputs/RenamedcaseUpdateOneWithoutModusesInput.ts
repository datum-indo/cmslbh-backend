import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutModusesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutModusesInput";
import { RenamedcaseCreateWithoutModusesInput } from "../inputs/RenamedcaseCreateWithoutModusesInput";
import { RenamedcaseUpdateWithoutModusesInput } from "../inputs/RenamedcaseUpdateWithoutModusesInput";
import { RenamedcaseUpsertWithoutModusesInput } from "../inputs/RenamedcaseUpsertWithoutModusesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutModusesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutModusesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutModusesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutModusesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutModusesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutModusesInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutModusesInput | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutModusesInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutModusesInput | undefined;
}
