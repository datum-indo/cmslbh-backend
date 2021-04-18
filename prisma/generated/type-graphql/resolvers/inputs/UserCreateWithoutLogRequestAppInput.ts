import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateNestedManyWithoutAppConsultationInput } from "../inputs/CaseConsultationAppCreateNestedManyWithoutAppConsultationInput";
import { CasePkCreateNestedManyWithoutPpPendampingInput } from "../inputs/CasePkCreateNestedManyWithoutPpPendampingInput";
import { LogRequestCreateNestedManyWithoutRequestByInput } from "../inputs/LogRequestCreateNestedManyWithoutRequestByInput";
import { LogRequestCreateNestedManyWithoutRequestToInput } from "../inputs/LogRequestCreateNestedManyWithoutRequestToInput";
import { RoleCreateNestedManyWithoutUserInput } from "../inputs/RoleCreateNestedManyWithoutUserInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutLogRequestAppInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rememberToken?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  roles?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationAppCreateNestedManyWithoutAppConsultationInput, {
    nullable: true
  })
  CaseConsultationApp?: CaseConsultationAppCreateNestedManyWithoutAppConsultationInput | undefined;

  @TypeGraphQL.Field(_type => CasePkCreateNestedManyWithoutPpPendampingInput, {
    nullable: true
  })
  CasePk?: CasePkCreateNestedManyWithoutPpPendampingInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateNestedManyWithoutRequestByInput, {
    nullable: true
  })
  logRequestBy?: LogRequestCreateNestedManyWithoutRequestByInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateNestedManyWithoutRequestToInput, {
    nullable: true
  })
  logRequestTo?: LogRequestCreateNestedManyWithoutRequestToInput | undefined;

  @TypeGraphQL.Field(_type => RoleCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  roles_type?: RoleCreateNestedManyWithoutUserInput | undefined;
}
