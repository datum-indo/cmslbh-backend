import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCaseKorbanInput } from "../inputs/PersonCreateOrConnectWithoutCaseKorbanInput";
import { PersonCreateWithoutCaseKorbanInput } from "../inputs/PersonCreateWithoutCaseKorbanInput";
import { PersonUpdateWithoutCaseKorbanInput } from "../inputs/PersonUpdateWithoutCaseKorbanInput";
import { PersonUpsertWithoutCaseKorbanInput } from "../inputs/PersonUpsertWithoutCaseKorbanInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateOneWithoutCaseKorbanInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCaseKorbanInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCaseKorbanInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCaseKorbanInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCaseKorbanInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutCaseKorbanInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutCaseKorbanInput | undefined;

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

  @TypeGraphQL.Field(_type => PersonUpdateWithoutCaseKorbanInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutCaseKorbanInput | undefined;
}
