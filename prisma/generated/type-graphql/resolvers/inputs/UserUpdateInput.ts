import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppUpdateManyWithoutAppConsultationInput } from "../inputs/CaseConsultationAppUpdateManyWithoutAppConsultationInput";
import { CasePkUpdateManyWithoutPpPendampingInput } from "../inputs/CasePkUpdateManyWithoutPpPendampingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LogRequestAppUpdateManyWithoutAppConsultationInput } from "../inputs/LogRequestAppUpdateManyWithoutAppConsultationInput";
import { LogRequestUpdateManyWithoutRequestByInput } from "../inputs/LogRequestUpdateManyWithoutRequestByInput";
import { LogRequestUpdateManyWithoutRequestToInput } from "../inputs/LogRequestUpdateManyWithoutRequestToInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RoleUpdateManyWithoutUserInput } from "../inputs/RoleUpdateManyWithoutUserInput";
import { UserProfileUpdateOneWithoutUserInput } from "../inputs/UserProfileUpdateOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  rememberToken?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  roles?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateManyWithoutAppConsultationInput, {
    nullable: true
  })
  CaseConsultationApp?: CaseConsultationAppUpdateManyWithoutAppConsultationInput | undefined;

  @TypeGraphQL.Field(_type => CasePkUpdateManyWithoutPpPendampingInput, {
    nullable: true
  })
  CasePk?: CasePkUpdateManyWithoutPpPendampingInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestUpdateManyWithoutRequestByInput, {
    nullable: true
  })
  logRequestBy?: LogRequestUpdateManyWithoutRequestByInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestUpdateManyWithoutRequestToInput, {
    nullable: true
  })
  logRequestTo?: LogRequestUpdateManyWithoutRequestToInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppUpdateManyWithoutAppConsultationInput, {
    nullable: true
  })
  LogRequestApp?: LogRequestAppUpdateManyWithoutAppConsultationInput | undefined;

  @TypeGraphQL.Field(_type => RoleUpdateManyWithoutUserInput, {
    nullable: true
  })
  roles_type?: RoleUpdateManyWithoutUserInput | undefined;
}
