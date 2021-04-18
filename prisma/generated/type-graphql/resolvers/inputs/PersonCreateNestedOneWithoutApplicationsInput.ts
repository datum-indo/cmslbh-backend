import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutApplicationsInput } from "../inputs/PersonCreateOrConnectWithoutApplicationsInput";
import { PersonCreateWithoutApplicationsInput } from "../inputs/PersonCreateWithoutApplicationsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedOneWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutApplicationsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutApplicationsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
