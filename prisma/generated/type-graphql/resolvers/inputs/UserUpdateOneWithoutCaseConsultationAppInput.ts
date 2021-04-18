import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCaseConsultationAppInput } from "../inputs/UserCreateOrConnectWithoutCaseConsultationAppInput";
import { UserCreateWithoutCaseConsultationAppInput } from "../inputs/UserCreateWithoutCaseConsultationAppInput";
import { UserUpdateWithoutCaseConsultationAppInput } from "../inputs/UserUpdateWithoutCaseConsultationAppInput";
import { UserUpsertWithoutCaseConsultationAppInput } from "../inputs/UserUpsertWithoutCaseConsultationAppInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutCaseConsultationAppInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCaseConsultationAppInput, {
    nullable: true
  })
  create?: UserCreateWithoutCaseConsultationAppInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCaseConsultationAppInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCaseConsultationAppInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCaseConsultationAppInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCaseConsultationAppInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCaseConsultationAppInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCaseConsultationAppInput | undefined;
}
