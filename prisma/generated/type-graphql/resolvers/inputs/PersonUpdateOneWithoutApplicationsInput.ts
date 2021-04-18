import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutApplicationsInput } from "../inputs/PersonCreateOrConnectWithoutApplicationsInput";
import { PersonCreateWithoutApplicationsInput } from "../inputs/PersonCreateWithoutApplicationsInput";
import { PersonUpdateWithoutApplicationsInput } from "../inputs/PersonUpdateWithoutApplicationsInput";
import { PersonUpsertWithoutApplicationsInput } from "../inputs/PersonUpsertWithoutApplicationsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateOneWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutApplicationsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutApplicationsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutApplicationsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutApplicationsInput | undefined;

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

  @TypeGraphQL.Field(_type => PersonUpdateWithoutApplicationsInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutApplicationsInput | undefined;
}
