import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutCaseInput } from "../inputs/ApplicationCreateOrConnectWithoutCaseInput";
import { ApplicationCreateWithoutCaseInput } from "../inputs/ApplicationCreateWithoutCaseInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationCreateNestedOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCaseInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;
}
