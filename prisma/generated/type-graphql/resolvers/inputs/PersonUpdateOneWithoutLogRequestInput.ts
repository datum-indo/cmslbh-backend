import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutLogRequestInput } from "../inputs/PersonCreateOrConnectWithoutLogRequestInput";
import { PersonCreateWithoutLogRequestInput } from "../inputs/PersonCreateWithoutLogRequestInput";
import { PersonUpdateWithoutLogRequestInput } from "../inputs/PersonUpdateWithoutLogRequestInput";
import { PersonUpsertWithoutLogRequestInput } from "../inputs/PersonUpsertWithoutLogRequestInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateOneWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutLogRequestInput, {
    nullable: true
  })
  create?: PersonCreateWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutLogRequestInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutLogRequestInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutLogRequestInput | undefined;

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

  @TypeGraphQL.Field(_type => PersonUpdateWithoutLogRequestInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutLogRequestInput | undefined;
}
