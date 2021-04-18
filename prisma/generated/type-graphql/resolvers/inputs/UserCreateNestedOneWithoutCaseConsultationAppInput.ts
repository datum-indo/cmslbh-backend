import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCaseConsultationAppInput } from "../inputs/UserCreateOrConnectWithoutCaseConsultationAppInput";
import { UserCreateWithoutCaseConsultationAppInput } from "../inputs/UserCreateWithoutCaseConsultationAppInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCaseConsultationAppInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCaseConsultationAppInput, {
    nullable: true
  })
  create?: UserCreateWithoutCaseConsultationAppInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCaseConsultationAppInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCaseConsultationAppInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
