import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCasePelakuInput } from "../inputs/PersonCreateOrConnectWithoutCasePelakuInput";
import { PersonCreateWithoutCasePelakuInput } from "../inputs/PersonCreateWithoutCasePelakuInput";
import { PersonUpdateWithoutCasePelakuInput } from "../inputs/PersonUpdateWithoutCasePelakuInput";
import { PersonUpsertWithoutCasePelakuInput } from "../inputs/PersonUpsertWithoutCasePelakuInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateOneWithoutCasePelakuInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCasePelakuInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCasePelakuInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCasePelakuInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCasePelakuInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutCasePelakuInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutCasePelakuInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutCasePelakuInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutCasePelakuInput | undefined;
}
